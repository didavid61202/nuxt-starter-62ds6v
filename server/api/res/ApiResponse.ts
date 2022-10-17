export class ApiResponse<T> {
    public data: T;
  
    constructor(data: T) {
      this.data = data;
    }
  }
  