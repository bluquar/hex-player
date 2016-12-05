import {
  Strategy,
  StrategyConfig,
} from 'strategy.js';

// --------- Strategies ------------
import {RandomHeuristicStrategy} from 'randomheuristicstrategy.js';
import {ScoreHeuristicStrategy} from 'scoreheuristicstrategy.js';
// ---------------------------------

const StrategyConfigs = [
  // First element is default
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
