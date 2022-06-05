const constants = {
  loginPage: {
    title: "Account Login",
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
    rememberMePlaceholder: "Remember Me",
    buttons: {
      login: "Login",
    },

  },
  DeleteModel: {
    deleteButton: 'Yes',
    cancleButton: 'No',
  },
  addNewUser: {
    title: "User details",
    firstNamePlaceholder: "First Name",
    lastNamePlaceholder: "Last Name",
    emailPlaceholder: "Email",
    phonePlaceholder: "Contact No.",
    companyPlaceholder: "Company",
    departmentPlaceholder: "Department",
    title1: "Password :",
    passwordPlaceholder: "Password",
    adminPlaceholder: "Admin",
    confirmPasswordPlaceholder: "Confirm Password",
    buttons: {
      addUser: "Save Details",
      reset: 'Reset'
    },
  },
  editUser: {
    title: "Edit User Details",
    firstNamePlaceholder: "First Name",
    lastNamePlaceholder: "Last Name",
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
    adminPlaceholder: "Admin",
    confirmPasswordPlaceholder: "Confirm Password",
    buttons: {
      editUser: "Save Details",
      reset: 'Reset'
    },
  },
  profile: {
    title: "User Details",
    firstNamePlaceholder: "First Name",
    lastNamePlaceholder: "Last Name",
    emailPlaceholder: "Email",
    companyPlaceholder: "Company",
    departmentPlaceholder: 'Department',
    phonePlaceholder: 'Contact No.',
    adminPlaceholder: "Admin",
    changePasswordPlaceholder: "Change Password?",
    oldPasswordPlaceholder: "Old Password",
    newPasswordPlaceholder: "New Password",
    confirmPasswordPlaceholder: "Confirm Password",
    buttons: {
      update: "Update",
      cancel: 'Cancel',
      reset: 'Reset'
    },
    changePasswordModal: {
      title: "Change Password",
      oldPasswordPlaceholder: "Old Password",
      newPasswordPlaceholder: "New Password",
      confirmPasswordPlaceholder: "Confirm Password",
      footerButtons: {
        cancel: "Cancel",
        change: "Change",
      },
    },
  },
  products: {
    title: "List of Products",
    searchText: "Find by Name of Products",
    adminPlaceholder: "Admin",
    userPlaceholder: "User",
    headers: [
      { label: "Index" },
      { label: "Product Name" },
      { label: "Descriptions" },
      { label: "Product Group" },
      { label: "Remarks" },
      { label: "Actions" }
    ],
    buttons: {
      add: "Products",
      reset: 'Reset'
    },

  },
  manageUsers: {
    title: "List of Users",
    pageText: "User List",
    searchText: "Find by Name or Email",
    adminPlaceholder: "Admin",
    userPlaceholder: "User",
    headers: [
      { label: "Index" },
      { label: "First Name" },
      { label: "Last Name" },
      { label: "Email" },
      { label: "Company" },
      { label: "Department" },
      { label: "Phone No." },
      // { label: "Edit" },
      { label: "Actions" }
    ],
    buttons: {
      add: "User",
      reset: 'Reset'
    },
  },
  companyTable: {
    pageText: "Company List",
    buttons: {
      update: "Update",
      reset: 'Reset'
    },
    headers: [
      { label: "No." },
      { label: "Company", className: "sorting" },
      { label: "Sector" },
      { label: "Funding Stage" },
      { label: "UEN" },
      { label: "Updated On" },
      { label: "View" },
    ],
  },
  confirmationModal: {
    footerButtons: {
      cancel: "Cancel",
      delete: "Delete",
    },
  },
  pagination: {
    pagePlaceholder: "Page",
    ofPlaceholder: "of",
  },
  header: {
    profilePlaceholder: "Manage Profile",
    logOutPlaceholder: "Log Out",
  },
  sidebar: {
    dashboardPlaceholder: "Home",
    usersPlaceholder: "Users",
    rolePlaceholder: "Role",
    productsGroupPlaceholder: "Products Groups",
    salesPersonPlaceholder: "Sales Person",
    // targetPlaceholder: "Target",
    commisionPlaceholder: "Commision",
    teamsPlaceholder: "Team",
    // rolePlaceholder: "Role",
    // paymentReportPlaceholder: "Payment Report",
    // reportsPlaceholder: "Reports",
    // addUserPlaceholder: "Add User",
    // manageUsersPlaceholder: "Manage Users",
    targetPlaceholder: "Target",
    productPlaceholder: "Products",
  },
  tooltips: {
    exampleTooltip: "Example Tooltip",
  },
  messages: {
    tryAgain: 'Something went wrong! Please try again later.',
    noData: 'No data available.',
    sessionExpired: 'Your session has expired. Please log in again.',
  },
  validationMessages: {
    fieldRequired: "This field is required.",
    validEmail: "Enter valid email address.",
    password6To12Chars: 'Password must be of 6-12 characters.',
    onlyAlphabets: "Numbers and special characters are not allowed.",
    bothPasswordSame: "Both password must match."
  },
  userManagement: {
    title: 'Users List',
    searchText: 'Search user',
    clearButton: 'Clear',
    headers: [
      { label: 'Sr No.' },
      { label: "First Name" },
      { label: "Last Name" },
      { label: "Email" },
      { label: "Phone No." },
      { label: "Company" },
      { label: "Department" },
      { label: "Actions" }
    ],
    buttons: {
      add: 'User',
      reset: 'Reset'
    },
    confirmationModal: {
      title: 'Are you sure you want to delete this User?',
      message: 'All the data associated with this user will be deleted.',
    },
    pageText: "User List",
  },
  teamManagement: {
    clearButtuon: 'clear',
    title: 'Team List',
    searchText: 'Search team',
    headers: [
      { label: "Sr No." },
      { label: "Team Name" },
      { label: "Actions" }
    ],
    buttons: {
      add: 'Team',
      reset: 'Reset',
    },
    pageText: "Team List",
    confirmationModal: {
      title: 'Are you sure you want to delete this Team?',
      message: 'All the data associated with this Team will be deleted.',
    },
  },
  addTeam: {
    title: "Add Team",
    EditTeamTitle: 'Edit Team',
    teamNamePlaceholder: "Team Name",
    buttons: {
      add: 'Add',
      edit: 'Update',
      cancel: 'Cancel',
      reset: 'Reset'
    },
  },

  roleManagement: {
    title: 'Role List',
    searchText: 'Search role',
    headers: [
      { label: "Sr No." },
      { label: "Team" },
      { label: "Role" },
      { label: "Actions" }
    ],
    pageText: "Role List",
    clearButton: 'Clear',
    buttons: {
      addButton: 'Role',
      add: 'Add',
      edit: 'Update',
      cancel: 'Cancel',
      reset: 'Reset'
    },
    confirmationModal: {
      title: 'Are you sure you want to delete this Role?',
      message: 'All the data associated with this Role group will be deleted.',
    },
  },
  ProductGroupManagement: {
    EditUserTitle: 'Edit Product Group',
    title: 'Product Group List',
    addProducttitle: 'Add Product Group',
    groupNamePlaceholder: 'Group Name',
    descriptionPlaceholder: 'Description',
    remarksPlaceholder: 'Remarks',
    searchText: 'Search product group',
    headers: [
      { label: 'Sr No.', },
      { label: "Group Name" },
      { label: "Description" },
      { label: "Remarks" },
      { label: "Actions" }
    ],
    buttons: {
      add: 'Product Group',
      reset: 'Reset'

    },
    submitButtons: {
      add: 'Add',
      edit: 'Update',
      cancel: 'Cancel',
      reset: 'Reset',
    },
    clearButton: 'Clear',
    confirmationModal: {
      title: 'Are you sure you want to delete this Product group?',
      message: 'All the data associated with this Product group will be deleted.',
    },
    pageText: "Product Group List",
  },
  addUser: {
    title: "User details",
    EditUserTitle: 'Edit Users',
    firstNamePlaceholder: "First Name",
    lastNamePlaceholder: "Last Name",
    emailPlaceholder: "Email",
    phonePlaceholder: "Contact No.",
    companyPlaceholder: "Company",
    departmentPlaceholder: "Department",
    title1: "Password :",
    passwordPlaceholder: "Password",
    confirmPasswordPlaceholder: "Confirm Password",
    buttons: {
      addUser: "Add",
      editUser: 'Update',
      cancel: 'Cancel',
      reset: 'Reset'
    },
  },
  addRole: {
    title: " Role Details",
    addTitle: 'Add Role Details',
    editUserTitle: 'Edit Role Details',
    teamNamePlaceholder: "Team : ",
    roleNamePlaceholder: "Role Name",
    buttons: {
      addRole: 'Add',
      editRole: 'Update',
      cancel: 'Cancel',
      reset: 'Reset'
    },
  },
  ProductManagement: {
    clearButton: 'Clear',
    EditUserTitle: 'Edit Product ',
    title: 'Product  List',
    addProductTitle: 'Add Product',
    ProductNamePlaceholder: 'Product Name',
    GroupNamePlaceholder: 'Product Group : ',
    descriptionPlaceholder: 'Description',
    remarksPlaceholder: 'Remarks',
    searchText: 'Search product',
    headers: [
      { label: 'Sr No.' },
      { label: "Product Name" },
      { label: "Description" },
      { label: "Product Group" },
      { label: "Remarks" },
      { label: "Actions" }
    ],
    buttons: {
      add: 'Product ',
      reset: 'Reset'

    },
    submitButtons: {
      add: 'Add',
      edit: 'Update',
      cancel: 'Cancel',
      reset: 'Reset',
    },
    confirmationModal: {
      title: 'Are you sure you want to delete this Product?',
      message: 'All the data associated with this Product  will be deleted.',
    },
    pageText: "Product  List",
  },
  TargetManagement: {
    EditTargetTitle: 'Edit Target ',
    addTitle: 'Add Target',
    title: 'Target  List',
    clearButton: 'Clear',
    salesPersonPlaceholder: 'Sales Person ',
    ProductGroupPlaceholder: 'Product Group ',
    targetPlaceholder: 'Target ',
    commissionPlaceholder: 'Commission Control ',
    searchText: 'Search target',
    headers: [
      { label: 'Sr No.' },
      { label: "Sales Person" },
      { label: "Product Group" },
      { label: "Target" },
      { label: "Commission Control" },
      { label: "Actions" }
    ],
    buttons: {
      add: 'Target ',
      reset: 'Reset'
    },
    submitButtons: {
      add: 'Add ',
      edit: 'Update',
      cancel: 'Cancel',
      reset: 'Reset',
    },
    confirmationModal: {
      title: 'Are you sure you want to delete this Target ?',
      message: 'All the data associated with this Target  will be deleted.',
    },
    commissionOptions: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' }
    ],
    pageText: "Product  List",
  },
  SalesPersonManagement: {
    EditSalesTitle: 'Edit Sales Person ',
    AddSalesTitle: 'Add Sales Person ',
    title: 'Sales Person  List',
    FirstNamePlaceholder: 'First Name',
    LastNamePlaceholder: 'Last Name',
    EmailPlaceholder: 'Email',
    PhonetNoPlaceholder: 'Phone No',
    DepartmentPlaceholder: 'Department',
    RoleDropdown: 'Role',
    companyPlaceHolder: 'Company',
    searchText: 'Search sales person',
    headers: [
      { label: 'Sr No.' },
      { label: "First Name" },
      { label: "Last Name" },
      { label: "Email" },
      { label: "Phone No." },
      { label: "Company" },
      { label: "Department" },
      { label: "Role" },
      { label: "Actions" }
    ],
    buttons: {
      add: 'Sales Person ',
      reset: 'Reset'

    },
    submitButtons: {
      add: 'Add',
      edit: 'Update',
      cancel: 'Cancel',
      reset: 'Reset'
    },
    clearButton: 'Clear',
    confirmationModal: {
      title: 'Are you sure you want to delete this Sales Person ?',
      message: 'All the data associated with this Sales Person  will be deleted.',
    },
  },
  dashboard: {
    title: 'Welcome to DnB Dashboard',
  },
  commissionManagement: {
    clearButton: 'Clear',
    AddCommissionTitle: 'Add Commission',
    EditCommissionTitle: 'Edit Commission',
    title: 'Commission List',
    productGroupPlaceholder: 'Product Group',
    productPlaceholder: 'Product',
    monthPlaceholder: 'Month & Year',
    rolePlaceholder: 'Role',
    salesTeamPlaceholder: 'Sales Team',
    periodTeamPlaceholder: 'Period',
    salesPersonRole: 'Sales Person Role',
    discountPlaceholder: 'Discount',
    cashPlaceholder: 'Cash/Unit',
    formulaPlaceholder: 'Formula',
    achievePlaceholder: '% Achieved',
    countPlaceholder: 'Revenue/Profit/Count of Contact',
    commissionInPlaceholder: 'Commission in % or $',
    standardPlaceholder: 'Standard Commission',
    searchText: 'Search commission',
    headers: [
      { label: 'Sr No.', },
      { label: "Role" },
      { label: "Product Group" },
      { label: "Product" },
      { label: "Standard Commission" },
      { label: "Actions" }
    ],
    buttons: {
      add: 'New Commission',
    },
    submitButtons: {
      add: 'Add',
      edit: 'Update',
      cancel: 'Cancel',
      reset: 'Reset',
    },
    confirmationModal: {
      title: 'Are you sure you want to delete this Commission group?',
      message: 'All the data associated with this Commission will be deleted.',
    },
    dollar: [
      { label: '%', value: '%' },
      { label: '$', value: '$' }
    ],
    pageText: "Commission List",
    monthFormat: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },

}
export default constants;

