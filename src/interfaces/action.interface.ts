import { Level, Topic, Word } from '../models/index';

export interface SetSharedData {
	(key: string, value: any): void;
}

export interface SetLevelBySource {
	(sourceId: string): any;
}

export interface SetTopicBySource {
	(sourceId: string): any;
}

export interface SetWordBySource {
	(sourceId: string): Promise<Array<Word>>;
}
