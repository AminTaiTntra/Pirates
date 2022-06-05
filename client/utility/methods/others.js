import { useState, useRef, useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';

const showToast = (message) => {
  toast.remove();
  message &&
    toast(message, {
      style: {
        background: '#333',
        color: '#fff',
      },
    });
}

const getFileNameFromURL = (url) => {
  const tempName = url ? url.split('/').pop().split('#')[0].split('?')[0] : '';
  return tempName?.replace(/%20/g, ' ');
};

const getFileExtensionFromName = (name) => {
  if (name) {
    const nameArray = name?.split('.') || [];
    const extensionArray = (nameArray[nameArray.length - 1]
      && nameArray?.[nameArray?.length - 1].split('?'))
      || [];
    return extensionArray[0] || '';
  } else {
    return '';
  }
};

function useStateCallback(initialState) {
  const [state, setState] = useState(initialState);
  const cbRef = useRef(null); // init mutable ref container for callbacks

  const setStateCallback = useCallback((state, cb) => {
    cbRef.current = cb; // store current, passed callback in ref
    setState(state);
  }, []); // keep object reference stable, exactly like `useState`

  useEffect(() => {
    // cb.current is `null` on initial render, 
    // so we only invoke callback on state *updates*
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
}

const getHeaderTitle = (path) => {
  if (/profile/.test(path)) {
    return 'Manage Profile';
  } else if (/dashboard/.test(path)) {
    return 'Dashboard';
  } else if (/add-new-user/.test(path)) {
    return 'Add User';
  } else if (/manage-users/.test(path)) {
    return 'Manage Users';
  } else if (
    /users/.test(path) ||
    /add-user/.test(path) ||
    /edit-user/.test(path)
  ) {
    return 'User Management';
  } else if (/users/.test(path) || (/add-user/.test(path)) || (/edit-user/.test(path))) {
    return 'User Management';
  } else if (
    /roles/.test(path) ||
    /add-role/.test(path) ||
    /edit-role/.test(path)
  ) {
    return 'Role Management';
  }

  else if (
    /product-groups/.test(path) ||
    /add-product-group/.test(path) ||
    /edit-product-group/.test(path)
  ) {
    return 'Product Group Management';
  } else if (
    /teams/.test(path) ||
    /add-team/.test(path) ||
    /edit-team/.test(path)
  ) {
    return 'Team Management';
  } else if (
    /products/.test(path) ||
    /add-product/.test(path) ||
    /edit-product/.test(path)
  ) {
    return 'Product Management';
  } else if (/target/.test(path)) {
    return 'Target Management';
  }
  else if (
    /sales_person/.test(path) ||
    /add-sales_person/.test(path) ||
    /edit-sales_person/.test(path)
  ) {
    return 'Sales Person Management';
  }
  return 'Yet to be set';
};


export const addSortingClassInHeader = (sort) => {
  return sort ? 'sorting' : '';
};

const getSidebarMenuClasses = (path) => {
  const sidebarMenuClasses = {
    dashboard: '',
    manageUsers: '',
    users: '',
    roles: '',
    manageTeams: '',
    teams: '',
    product: '',
    productGroup: '',
    target: '',
    salesPerson: '',
    commission: ''
  };
  if (/dashboard/.test(path)) {
    sidebarMenuClasses.dashboard = 'active';
  } else if (
    /add-new-user/.test(path) ||
    /manage-users/.test(path) ||
    /edit-user/.test(path)
  ) {
    sidebarMenuClasses.manageUsers = 'active';
  } else if (/users/.test(path)) {
    sidebarMenuClasses.users = 'active';
  } else if (/add-team/.test(path) || /edit-team/.test(path)) {
    sidebarMenuClasses.manageTeams = 'active';
  } else if (/teams/.test(path)) {
    sidebarMenuClasses.teams = 'active';
  } else if (/product-groups/.test(path)) {
    sidebarMenuClasses.productGroup = 'active';
  } else if (/products/.test(path)) {
    sidebarMenuClasses.product = 'active';
  }
  else if (/target/.test(path)) {
    sidebarMenuClasses.target = 'active';
  }
  else if (/sales_person/.test(path)) {
    sidebarMenuClasses.salesPerson = 'active';
  }
  else if (/commission/.test(path)) {
    sidebarMenuClasses.commission = 'active';
  }
  return sidebarMenuClasses;
};

const getBaseURL = () => {
  if (!process.env.REACT_APP_ENV) {
    return process.env.REACT_APP_LOCAL_URL;
  } else if (process.env.REACT_APP_ENV === 'staging') {
    return process.env.REACT_APP_STAGING_URL;
  } else if (process.env.REACT_APP_ENV === 'production') {
    return process.env.REACT_APP_PRODUCTION_URL;
  } else {
    return '';
  }
};

const formateDropdownValue = (data) => {
  const finalObj = [];
  let key = data && Object?.keys(data)

  key?.length > 0 && key?.map((item) => {
    finalObj.push({ value: item, label: data?.[item] })
  })

  return finalObj;
}

 const formatSelectDropdown = (data, name) => {
  var formateData =
    data?.length > 0 &&
    data?.map((item) => {
      return { [name]: item?.value };
    });

  return formateData;

};
const formatSelectedMultiDropdown = (data) => {
  return data && data?.map((item) => {
    return item?.value
    })
};
const formateObjectDropdownValue = (data) => {
  return data && data?.length > 0 && data?.map((item) => {
    return { value: item?.id, label: item?.full_name }
  })
}


export {
  showToast,
  getFileNameFromURL,
  getFileExtensionFromName,
  useStateCallback,
  getHeaderTitle,
  getSidebarMenuClasses,
  getBaseURL,
  formateDropdownValue,
  formateObjectDropdownValue,
  formatSelectDropdown,
  formatSelectedMultiDropdown
};
export const setQualifiersDropdown = (data) => {
  return data && data?.length > 0 && data?.map((item) => {
    return { value: item?.value, commission_value: item?.commission_value }
  })
}
export const formateStaticDataDropdown = (data) => {
  return data && data?.length > 0 && data?.map((item) => {
    return { value: item, label: item }
  })
}

export const disabledStanderCommission = (data) => {
  return data?.[0]?.value || data?.[0]?.commission_value ? true : false
}
