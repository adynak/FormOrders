var txtMaintainTables = {
    menuCategory: 'Categories',
    menuIngredient: 'Ingredients',
    menuMeasure: 'Measures',
    menuHome: 'Home',
    removed: 'Removed',
    removedFailed: 'Could not remove',
    removedFailedInUse: 'A Cocktail Recipe references',
    addDuplicate: 'is a duplicate of',
    addFailed: 'Could not add',
    addPassed: 'added',
    btnCancel: 'Done',
    btnAddItem: 'Add',
    new: 'New',
    maintainWhat: [
        {
            tableName: 'category',
            pageName: 'Category',
            placeHolder: 'New Category Name',
            get: 'getCategories'
        },
        {
            tableName: 'ingredient',
            pageName: 'Ingredient', 
            placeHolder: 'New Ingredient Name',
            get: 'getIngredients'
        },
        {
            tableName: 'measure',
            pageName: 'Measurement',            
            placeHolder: 'New Measurement Name',
            get: 'getMeasures'            
        }
    ],
    listHeight: '360px'
};

var txtLogin = {
    onlineID: 'Online ID',
    email: 'email',
    logIn: '',
    logOut: 'Logged out successfully',
    password: 'Password',
    passwordConfirm: 'Confirm Password',
    errOnlineID: 'OnlineID is required',
    errEmail: 'Email is required',
    errPasswordRequired: 'Password is required',
    errPasswordDifferent: 'Passwords Do Not Match!',
    errPasswordInvalid: 'Minimum length is 5 characters.',
    errPassword: 'Minimum length is 55 characters.',
    btnLogin: 'Login',
    btnRegister: 'Register',
    btnLogout: 'Logout',
    btnPasswordHelp: 'Need Login Help?',
    credentialsValid: 'You are now logged in.',
    credentialsInvalid: 'The email or password you have entered is invalid.',
    registrationSuccess: 'Your request has been received.  Look for email confirmation soon.',
    registrationSent: 'Processing your request',
    registerPageTitle: 'Register',
    image: 'resources/images/drinks.jpeg'
};

var txtNavigation = {
    brandName: 'eForms Template: Form Orders',
    btnLogin: 'Login',
    btnRegister: 'Register',
    btnLogout: 'Logout',
    replyTo: 'adynak@gmail.com',
    appDomain: 'noreply.com'
};

var txtCocktailLibrary = {
    pageTitle: 'Cocktail Library',
    btnCancel: 'Done',
    columnCategory: 'Category',
    columnCocktail: 'Cocktail',
    searchEmptyText: 'Search',
    gridHeight: '360px'
};

var txtCategoryFormsOrder = {
    btnCancel: 'Done',
    btnCopyToClipboard: 'Copy To Clipboard',
    formsOrder: ' Forms Order',
    formsList: "Forms",
    comments: "Comments",
    placeHolderFormsList: "Paste or type in the %1 form IDs",
    placeHolderComments: 'optional comments',
    clearFormsList: 'Clear Forms List',
    dateDue: "Date Due"
}

var txtBuildLocalLibrary = {
    btnCancel: 'Done',
    btnCopyToClipboard: 'Copy To Clipboard',
    btnBuildXcopyCommand: 'Build xcopy Command',
    pageTitle: 'Build Local Library',
    formsList: "Forms",
    comments: "Comments",
    placeHolderFormsList: "Paste or type in the form library Location",
    placeHolderComments: 'optional comments',
    clearFormsList: 'Clear Forms List',
    localFolder: 'Local Library',
    placeholderLocalLibrary: "Paste or type in the full path to your local library",
    xcopyCommand: 'These commands will copy your forms to your local library',
    placeholderXcopyCommand: ''
}


var txtNewRecipe = {
    pageTitle: 'Add A New Recipe',
    recipeName: 'Recipe Name',
    recipeNamePlaceholder: 'Enter the Recipe Name',
    ingredient: 'Ingredient',
    ingredients: 'Ingredients',
    ingredientPlaceholder: 'Select Ingredient',    
    amount: 'How Much?',
    amountPlaceholder: 'Select an Amount',
    measure: 'Measure',
    measurePlaceholder: 'Select Measurement',
    category: 'Category',
    categoryPlaceholder: 'Select Category',
    tasteProfile: 'Taste',
    tasteProfilePlaceholder: 'Select Taste Profile',
    serves: 'Serves',
    servesPlaceholder: 'Serves',    
    selectIngredient: 'Select Ingredient',
    gridColumnAmount: 'Amount',
    gridColumnMeasure: 'Measure',
    gridColumnIngredient: 'Ingredient',
    whatsInIt: "What's In It?",
    recipient: 'Referal For',
    btnNext: 'Add To Library',
    btnAddIngredient: 'Add Ingredient',
    btnCancel: 'Cancel',
    newRecipe: 'Your cocktail has been added.',
    errIngredientRequired: 'ingredient required',
    errAmountRequired: 'amount requried',
    errMeasureRequired: 'measurement required'
};

// var txtSideMenu = {
//     menuFOandDealer: "FO and Dealer",
//     menuCocktailLibrary: 'CAT1',
//     menuNewRecipe: 'CAT2',
//     menuMaintainMenu: 'CAT3',
//     menuFormOrder: 'Build Local Library'
// };

var menuSide = [
    {
        label: "FO and Dealer",
        link:"profile",
        iconClass:"glyphicon glyphicon-info-sign alert-info",
    },
    {
        label: "CAT1",
        link:"category?category=CAT1",
        iconClass:"glyphicon glyphicon-list alert-danger"
    },
    {
        label: "CAT2",
        link:"category?category=CAT2",
        iconClass:"glyphicon glyphicon-list alert-danger"
    },
    {
        label: "CAT3",
        link:"category?category=CAT3",
        iconClass:"glyphicon glyphicon-list alert-danger"
    },
    {
        label: "Build Local Library",
        link:"buildLocalLibrary",
        iconClass:"glyphicon glyphicon-cloud-download alert-info"
    }  
];

var txtToaster = {
    startOver: "All values cleared.  Ready to start over fresh."
};

var txtProfile = {
    formOrderID: "FO Number",
    placeholderFormOrderID: "Form Order ID",
    contractLine: "Contract Line",
    placeholderContractLine: "Contract Line",
    dealRetail: "Sample Retail Deal",
    dealLease: "Sample Lease Deal",
    placeholderDeals: "Optional",
    btnCancel: 'Cancel',
    btnRegister: 'Register',
    btnSubmit: 'Done',
    btnLogin: 'Login',
    email: 'Email Address',
    errEmail: 'Must be a valid email address.',
    errNameFirst: 'Member first name required',
    errNameLast: 'Member last name required.',
    errOnlineID: 'OnlineID required',
    errPasswordDifferent: 'Passwords Do Not Match!',
    errPasswordLength: 'Minimum length is 5 characters.',
    errPasswordRequired: 'Password is required',
    errPhonePrimary: 'Phone Number is required.',
    nameFirst: 'First Name',
    nameLast: 'Last Name',
    onlineID: 'OnlineID',
    pageTitle: 'FO and Dealership',
    password: 'Password',
    passwordConfirm: 'Confirm Password',
    phonePrimary: 'Phone Number',
    updateSuccessful: 'Profile Updated Successfully',
};

var txtSecurity = {
    required: true,
    schema: 'Schema Name',
    dbPass: 'Database Password',
    pgPort: 'Database Listen Port',
    btnSubmit: 'Save',
    errSchemaRequired: 'Scnema Name is Required',
    errDbPassRequired: 'Database Password is Requried',
    errPgPortRequired: 'Database Listen Port is Requried',    
    saveSecurity: 'Database Configuration Saved.',
    saveSecurityFailed: "That Didn't Work.  Try Again or Close This WebPage."
};