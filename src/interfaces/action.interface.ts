import { Level, Topic, Word } from '../models/index'

export interface SetLevelBySource {
    (sourceId: string): any;
}

export interface SetTopicBySource {
    (sourceId: string): any;
}

export interface SetWordBySource {
    (sourceId: string): Promise<Array<Word>>;
}
