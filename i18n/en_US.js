var txtNavigation = {
    siteTitle: 'eforms Template',
    brandName: 'eForms Template: Form Orders'
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
    btnWhereAreThey: "Find Forms",
    btnGoGetThem: "Get Forms",
    pageTitle: 'Build Local Library',
    formsList: "Forms",
    comments: "Comments",
    placeHolderFormsList: "Paste or type a list of forms",
    placeHolderComments: 'optional comments',
    clearFormsList: 'Clear Forms List',
    localFolder: 'Local Library',
    placeholderLocalLibrary: "Paste or type in the full path to your local library",
    xcopyCommand: 'Forms Found In These Folders',
    placeholderXcopyCommand: 'Click Find Forms to begin search',
    updateSuccessful: "Search Complete",
    updateFailed: "Hmmmm.  That didn't work.",
    waitWait: "I'll let you know when I'm done.",
    waitTitle: "Download In Progress",
    completed: "Download complete for this form: ",
    downloading: "Downloading this form:",
    downloadComplete: "Download completed for these forms:.",
    pathMissing: "Cannot download without a Local Library, something like C:\\123456_CDKMotors\\CAT1",
    missingForms: "Count not locate these forms.  Are they new forms or typos?"
}

var txtMenuSide = [
    {
        label: "FO and Dealer",
        link:"profile",
        iconClass:"glyphicon glyphicon-info-sign alert-info",
        showOrderOnly: true
    },
    {
        label: "CAT1",
        link:"category?category=CAT1",
        iconClass:"glyphicon glyphicon-list alert-danger",
        showOrderOnly: true
    },
    {
        label: "CAT2",
        link:"category?category=CAT2",
        iconClass:"glyphicon glyphicon-list alert-danger",
        showOrderOnly: true
    },
    {
        label: "CAT3",
        link:"category?category=CAT3",
        iconClass:"glyphicon glyphicon-list alert-danger",
        showOrderOnly: true
    },
    {
        label: "Build Local Library",
        link:"buildLocalLibrary",
        iconClass:"glyphicon glyphicon-cloud-download alert-info",
        showOrderOnly: false
    },
    {
        label: "Customize Forms",
        link:"customizeLibrary",
        iconClass:"glyphicon glyphicon-certificate alert-gold",
        showOrderOnly: false
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
    btnSubmit: 'Done',
    pageTitle: 'FO and Dealership',
    updateSuccessful: 'Profile Updated Successfully',
};

var factoryMessages = {
    getFormsFailed: "Something about that forms list caused the search to fail.",
    getFormsFailedTitle: "Search Request Refused"
};

var txtBrand = {
    pageTitle: "Customize Forms Library",
    cmf: "CMF Number",
    cNumber: "C Number",
    dashFI: "F&I Account Name",
    ip: "IP Address",
    dealRetail: "Retail Deal Number",
    dealLease: "Lease Deal Number",
    btnSubmit: "Brand Forms",
    btnCancel: "Cancel",
    updateBy: "Update By Name",
    comment: "Comment",
    requiredMsg: "Required fields are marked with an asterisk. " +
     "The other responses are not required. However, the action will still be performed. "+
     "That is, if you leave a field blank, a blank value will be used in branding.",
    placeHolderComment: 'optional comment',
    localFormsFolder: 'Local Forms Library',
    placeholderLocalFormsFolder: "Paste or type in the full path to your local forms library for this install",
    localDealsFolder: 'Local Deals Library',
    placeholderLocalDealsFolder: "C:\\WORKING SITE DOWNLOADS\\FI\\Datastreams",
    placeholderCMF: 'CMF Number',
    placeholderCNumber: 'CNumber',
    placeholderDashFI: 'F&I account name',
    placeholderDealRetail: 'Retail Deal Number',
    placeholderDealLease: 'Lease Deal Number',
    placeholderIP: 'IP Address',
    placeholderUpdateBy: 'Update By Name',
    updateSuccessful: "Branding Completed",
    updateFailed: "Branding Failed"
};