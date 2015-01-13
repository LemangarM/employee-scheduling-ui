'use strict';

function contactDetailsRoute($stateProvider) {

    return $stateProvider
        .state('employees.edit.contact-details', {
            url: '/contact-details',
            views: {
                'modal@': {
                    templateUrl: 'app/states/employees/edit/contact-details/contact-details.html'
                }
            }
        });
}

export default contactDetailsRoute;