#!/bin/python

import os

HTML_FILE = 'index.html'
BEGIN_TAG = '<!-- ## BEGIN %s ## -->'
END_TAG = '<!-- ## END %s ## -->'

SCRIPT_DIRECTIVE = 'AUTO SCRIPT'
STYLE_DIRECTIVE = 'AUTO STYLE'
CONTROLLER_DIRECTIVE = 'AUTO CONTROLLER'
INIT_DIRECTIVE = 'AUTO INIT'

def file_includer(line_fmt, extensions=None, explicit=None, ignore=None, directory=None):
	if extensions is None:
		extensions = []
	if explicit is None:
		explicit = []
	if ignore is None:
		ignore = []
	def includer():
		script_file = os.path.realpath(__file__)
		script_dir = os.path.dirname(script_file)
		root = None
		dir_and_fname = None
		if directory is None:
			root = script_dir
			dir_and_fname = lambda fn: fn
		else:
			root = os.path.join(script_dir, directory)
			dir_and_fname = lambda fn: os.path.join(directory, fn)
		script_names = []
		for fname in os.listdir(root):
			if any(i in fname for i in ignore):
				continue
			if any(e in fname for e in explicit):
				script_names.append(line_fmt(dir_and_fname(fname)))
				continue
			if any(fname.endswith(ext) for ext in extensions):
				script_names.append(line_fmt(dir_and_fname(fname)))
				continue
		return script_names
	return includer

def script_line_fmt(fname):
	return '  <script type="module" src="%s"></script>\n' % fname

def style_line_fmt(fname):
	return '  <link rel="stylesheet" type="text/css" href="%s"></link>\n' % fname

script_processor = file_includer(
	script_line_fmt, 
	extensions=['.js'],
	ignore=['template', 'controller', 'init'],
	directory='build'
)

controller_processor = file_includer(
	script_line_fmt,
	explicit=['controller.js'],
	directory='build'
)

init_processor = file_includer(
	script_line_fmt,
	explicit=['init.js'],
	directory='build'
)

style_processor = file_includer(
	style_line_fmt, 
	extensions=['.css']
)

def process_directive(source_file, directive_name, processor):
	with open(source_file, 'r') as src:
		src_lines = src.readlines()
	begin_line = None
	end_line = None
	begin_tag = BEGIN_TAG % directive_name
	end_tag = END_TAG % directive_name
	for i, line in enumerate(src_lines):
		if begin_tag in line:
			assert begin_line is None
			begin_line = i
		if end_tag in line:
			assert end_line is None
			end_line = i
	src_lines[begin_line + 1:end_line] = processor()
	with open(source_file, 'w') as src:
		for line in src_lines:
			src.write(line)


def main():
	process_directive(HTML_FILE, SCRIPT_DIRECTIVE, script_processor)
	process_directive(HTML_FILE, STYLE_DIRECTIVE, style_processor)
	process_directive(HTML_FILE, CONTROLLER_DIRECTIVE, controller_processor)
	process_directive(HTML_FILE, INIT_DIRECTIVE, init_processor)

if __name__ == '__main__':
	main()