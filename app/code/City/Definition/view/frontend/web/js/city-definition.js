define([
    'jquery',
    'Magento_Ui/js/modal/modal',
    'mage/url',
], function ($, modal, urlBuilder) {

    let ajaxT = {
        ajaxPostSend: function (form) {
            let url = urlBuilder.build("city-def/index/index");
            $.ajax({
                showLoader: true,
                url: url,
                type: "POST",
                dataType: 'json',
                context: this,
                data: form,
            });
        }
    };

    let options = {
        type: 'popup',
        responsive: true,
        innerScroll: true,
        title: 'Choose your city',
        buttons: [{
            text: $.mage.__('Close'),
            class: 'modal-close',
            click: function () {
                this.closeModal();
            }
        },
            {
                text: $.mage.__('Ok'),
                class: 'modal-close',
                click: function () {
                    cityInfoSend = {
                        content: $('#city123').serializeArray(),
                    };
                    ajaxT.ajaxPostSend(cityInfoSend);
                    this.closeModal();
                }
        }
        ]
    };

    let options1 = {
        type: 'popup',
        responsive: true,
        innerScroll: true,
        title: 'Your city?',
        buttons: [{
            text: $.mage.__('Yes'),
            class: 'modal-close',
            click: function () {
                cityInfoSend = $('#cityModal').text();  //$('#modal-custom-city')   $('#cityModal').serializeArray()  serializeArray()
                ajaxT.ajaxPostSend(cityInfoSend);
                this.closeModal();
            }


        },
            {
                text: $.mage.__('Choose Another'),
                class: 'modal-close',
                click: function () {
                    $("#modal-content-city").modal('openModal');
                    this.closeModal();
                }
        }

        ]
    };


    let cityInfoSend;
    modal(options, $('#modal-content-city'));
    modal(options1, $('#modal-custom-city'));


    $("#modal-btn-custom-city").click(function () {
        $("#modal-custom-city").modal('openModal');
    });
});


