import HomeOutline from 'mdi-material-ui/HomeOutline'
import BorderAll from 'mdi-material-ui/BorderAll'
import ShareVariantOutline from 'mdi-material-ui/ShareVariantOutline'
import CogOutline from 'mdi-material-ui/CogOutline'
import NewspaperVariantOutline from 'mdi-material-ui/NewspaperVariantOutline'

const navigation = () => {
  return [
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/home'
    },
    {
      title: 'Dashboards',
      icon: ShareVariantOutline,
      path: '/dashboard/editDashboard',
      children: [
        {
          title: 'Add Dashboard',
          path: '/dashboard/addDashboard'
        },
        {
          title: 'Edit Dashboard',
          path: '/dashboard/editDashboard'
        }
      ]
    },

    {
      title: 'Applications',
      icon: BorderAll,
      path: '/applications',
      children: [
        {
          title: 'Sections',
          path: '/applications'
        },
        {
          title: 'Activity Report',
          path: '/applications/activityReport'
        },
        {
          title: 'Barred Persons',
          path: '/applications/barredPersons'
        },
        {
          title: 'Documents',
          path: '/applications/documents'
        },
        {
          title: 'Events',
          path: '/applications/events'
        },
        {
          title: 'Forms',
          path: '/applications/forms'
        },
        {
          title: 'Heliaus Order Management',
          path: '/applications/heliausOrderManagement'
        },
        {
          title: 'Incidents',
          path: '/applications/incidents'
        },
        {
          title: 'Lost and Found',
          path: '/applications/lostandfound'
        },
        {
          title: 'Messages',
          path: '/applications/messages'
        },
        {
          title: 'Post Orders',
          path: '/applications/postOrders'
        },
        {
          title: 'Site Inspections',
          path: '/applications/siteInspections'
        },
        {
          title: 'Tasks',
          path: '/applications/tasks'
        },
        {
          title: 'VVM',
          path: '/applications/vvmDashboard'
        },
        {
          title: 'Visitor Occupancy',
          path: '/applications/visitorOccupancy'
        },
        {
          title: 'Visitor Screenings',
          path: '/applications/visitorScreening'
        }
      ]
    },

    {
      title: 'Site Configuration',
      icon: CogOutline,
      path: '/siteConfiguration',
      children: [
        {
          title: 'Section',
          path: '/siteConfiguration'
        },
        {
          title: 'Activity Color Codes',
          path: '/siteConfiguration/activityColor'
        },
        {
          title: 'Cameras',
          path: '/siteConfiguration/cameras'
        },
        {
          title: 'Check Lists',
          path: '/siteConfiguration/checkLists'
        },
        {
          title: 'Contacts',
          path: '/siteConfiguration/contacts'
        },
        {
          title: 'Dynamic AI Tours',
          path: '/siteConfiguration/dynamicTours'
        },
        {
          title: 'Heliaus Remote Events',
          path: '/siteConfiguration/heliausRemoteEvents'
        },
        {
          title: 'Holiday Calendar',
          path: '/siteConfiguration/holidayCalendar'
        },
        {
          title: 'Location Identifiers',
          path: '/siteConfiguration/locationIdentifiers'
        },
        {
          title: 'Officer Monitoring',
          path: '/siteConfiguration/officerMonitoring'
        },
        {
          title: 'All Patrol Routes',
          path: '/siteConfiguration/patrolRoutes'
        },
        {
          title: 'Site Coverage Map',
          path: '/siteConfiguration/siteCoverage'
        },
        {
          title: 'Static Tours',
          path: '/siteConfiguration/staticTours'
        },
        {
          title: 'Site Attributes',
          path: '/siteConfiguration/siteAttributes'
        },
        {
          title: 'Workflows',
          path: '/siteConfiguration/workflows'
        },
        {
          title: 'Zones',
          path: '/siteConfiguration/zones'
        }
      ]
    },
    {
      title: 'Reports',
      icon: NewspaperVariantOutline,
      path: '/reports',
      children: [
        {
          title: 'Sections',
          path: '/reports'
        },
        {
          title: 'My Reports',
          path: '/reports/myReports'
        },
        {
          title: 'Site Reports',
          path: '/reports/siteReports'
        },
        {
          title: 'Custom Report Writer',
          path: '/reports/customReportWriter'
        }
      ]
    }
  ]
}

export default navigation
