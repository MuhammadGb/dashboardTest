// ----------------------------------------------------------------------

const getIcon = (name) => <img src={name} alt="img" />;

export const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('/static/icons/dashboadIcon.svg')
  },
  {
    title: 'grades',
    path: '/dashboard/user',
    icon: getIcon('/static/icons/gradesIcon.svg')
  },
  {
    title: 'class',
    path: '/dashboard/products',
    icon: getIcon('/static/icons/classIcon.svg')
  },
  {
    title: 'groups',
    path: '/dashboard/blog',
    icon: getIcon('/static/icons/groupsIcon.svg')
  },
  {
    title: 'administration',
    path: '/login',
    icon: getIcon('/static/icons/adminIcon.svg')
  },
  {
    title: 'departments',
    path: '/register',
    icon: getIcon('/static/icons/deptIcon.svg')
  }
];

export const sidebarBottom = [
  {
    title: 'message',
    path: '/dashboard/app/#',
    icon: getIcon('/static/icons/chatIcon.svg'),
    alertNo: 8
  },
  {
    title: 'call meeting',
    path: '/dashboard/app/##',
    icon: getIcon('/static/icons/callIcon.svg')
  }
];
