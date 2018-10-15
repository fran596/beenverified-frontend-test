const User = function (email, password, reports, index, activity)  {
    this.email = email;
    this.password = password;
    this.reports = reports;
    this.index = index;
    this.activity = activity;
}

export default User;