{
    path: '/',
    redirect: '/home'
  },
  {
    path: '',
    component: Layout,
    children: [{
        path: '/home',
        name: 'Home',
        component: Home,
        children: [{
            path: 'shouldKnowOfficerApply',
            name: 'ShouldKnowOfficerApply',
            component: ShouldKnowOfficerApply
          },
          {
            path: 'annualPlanOfficerApply',
            name: 'AnnualPlanOfficerApply',
            component: AnnualPlanOfficerApply
          }]
    }]
  }
