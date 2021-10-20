export class Users {
    constructor(public login: string,
                public location: string,
                public followers: number,
                public following: number,
                public memberSinceDate: Date,
                public email: string,
  // tslint:disable-next-line: variable-name
                public avatar_url: any,
                public repos: number | undefined) {
  }
  }
  