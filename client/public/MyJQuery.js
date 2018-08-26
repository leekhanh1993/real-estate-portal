$(document).ready(function () {
    // //UserLogin
    // $('#openUserLogin').click(function () {
    //     $('#userLogin').modal({
    //         backdrop: 'static',
    //         show: false
    //     });
    // })
    $('#closeUserLoginBtnL').click(function () {
        $('#userLogin').modal('hide');
    });
    $('#closeUserLoginbtnC').click(function () {
        $('#userLogin').modal('hide');
    });
    // $('#userLogin').on('hide.bs.modal', function () {
    //     $('#userLoginForm').bootstrapValidator('resetForm', true);
    // });
    // $('#userLoginForm').bootstrapValidator({
    //     feedbackIcons: {
    //         valid: 'glyphicon glyphicon-ok',
    //         invalid: 'glyphicon glyphicon-remove',
    //         validating: 'glyphicon glyphicon-refresh'
    //     },
    //     fields: {
    //         userName: {
    //             validators: {
    //                 notEmpty: {
    //                     message: 'The User Name is required'
    //                 }
    //             }
    //         },
    //         password: {
    //             validators: {
    //                 notEmpty: {
    //                     message: 'The password is required'
    //                 }
    //             }
    //         }
    //     }
    // }).on('success.form.bv', function (e) {
    //     e.preventDefault();
    //     $('#userLogin').modal('toggle');
    // });
    //AddUser
    $('#openRegisterUser').click(function () {
        $('#addUser').modal({
            backdrop: 'static',
            show: false,
            keyboard: false
        });
    })
    $('#addUser').on('hide.bs.modal', function () {
        $('#registerUserForm').bootstrapValidator('resetForm', true);
    });
    $('#closeRegisterUser').click(function () {
        $('#addUser').modal('toggle');
    });

    $('#registerUserForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            userName: {
                validators: {
                    notEmpty: {
                        message: 'The User Name is required'
                    }
                }
            },
            displayName: {
                validators: {
                    notEmpty: {
                        message: 'The Display Name is required'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    },
                    identical: {
                        field: 'confirmPassword',
                        message: 'The password and its confirm are not the same'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: 'The confirmPassword is required'
                    },
                    identical: {
                        field: 'password',
                        message: 'The password and its confirm are not the same'
                    }
                }
            }
        }
    }).on('success.form.bv', function (e) {
        e.preventDefault();
        $('#addUser').modal('hide');
    });
});