export declare interface Credentials {
  email?: string | undefined;
  provider?: "github" | undefined;
}

export declare interface Todos {
  id: number;
  is_complete: boolean;
  task: string;
}
