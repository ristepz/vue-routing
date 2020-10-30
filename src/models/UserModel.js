export class UserModel {
  constructor(data = {}) {
    this.ID = data.id;
    this.Avatar = data.avatar;
    this.FirstName = data.first_name;
    this.LastName = data.last_name;
    this.Email = data.email;
    this.FullName = this.setFullName();
  }

  setFullName() {
    return `${this.FirstName} ${this.LastName}`;
  }
}