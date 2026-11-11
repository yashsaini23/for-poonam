export interface Chapter {
  id: number;
  path: string;
  number: string;
  title: string;
  shortLabel: string;
  description?: string;
}

export interface DisclaimerCard {
  id: string;
  number: string;
  title: string;
  description: string;
  annotation?: string;
}

export interface QuestionBranch {
  id: 'A' | 'B' | 'C';
  label: string;
  sublabel: string;
  reactionLines: string[];
  note: string;
  canProceed: boolean;
}

export interface LittleThingCard {
  id: number;
  number: string;
  text: string;
  annotation?: string;
}

export interface RandomThought {
  id: number;
  text: string;
}
