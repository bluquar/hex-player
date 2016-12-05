import {
  Strategy,
  StrategyConfig,
} from 'strategies/strategy.js';

// --------- Strategies ------------
import {RandomHeuristicStrategy} 
  from 'strategies/heuristics/randomheuristicstrategy.js';

import {ScoreHeuristicStrategy} 
  from 'strategies/heuristics/scoreheuristicstrategy.js';

import {ExpectedPlaceablePieces} 
  from 'strategies/heuristics/expected-placeable-pieces.js';

import {NumPlaceable}
  from 'strategies/heuristics/num-placeable.js';
// ---------------------------------

const StrategyConfigs = [
  // First element is default
  new StrategyConfig(
    'NP',
    (hook: HTMLElement, debug: boolean) => 
      new NumPlaceable(hook, debug),
  ),

  new StrategyConfig(
    'EPP',
    (hook: HTMLElement, debug: boolean) => 
      new ExpectedPlaceablePieces(hook, debug),
  ),

  new StrategyConfig(
    'Points',
    (hook: HTMLElement, debug: boolean) => 
      new ScoreHeuristicStrategy(hook, debug),
  ),

  new StrategyConfig(
    'Random',
    (hook: HTMLElement, debug: boolean) => 
      new RandomHeuristicStrategy(hook, debug),
  ),
];

export class StrategyStore {
  static strategyConfigs(): StrategyConfig[] {
    return StrategyConfigs;
  }

  static getDefaultStrategyConfig(): StrategyConfig {
    return StrategyConfigs[0];
  }

  static getByName(name: string): ?StrategyConfig {
    for (let strategyConfig of StrategyStore.strategyConfigs()) {
      if (strategyConfig.name === name) {
        return strategyConfig;
      }
    }
    return null;
  }
}
