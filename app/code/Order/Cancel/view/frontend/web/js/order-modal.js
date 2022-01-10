define([
    'jquery',
    'Magento_Ui/js/modal/modal',
    'mage/url'
], function ($, modal, urlBuilder) {

    var OrderModal = {
        /**
         *
         * @param config
         * @param element
         */
        initModal: function (config, element) {

            var ajaxT = {
                /**
                 *
                 * @param obj
                 */
                ajaxPostSend: function (obj) {
                    var url = urlBuilder.build("ordercancel/index/cancel");
                    $.ajax({
                        showLoader: true,
                        url: url,
                        type: "POST",
                        dataType: 'json',
                        context: this,
                        data: obj
                    }).done(function (respond) {
                        console.log('Done!');
                        // window.location.reload(true);
                        // location.reload();
                        window.location.reload();
                    });
                }
            };

            var options = {
                type: 'popup',
                responsive: true,
                innerScroll: true,
                title: 'Cancel Order',
                modalLeftMargin: 55,
                buttons: [
                    {
                        text: $.mage.__('Close'),
                        class: 'modal-close',
                        click: function () {
                            console.log("close");
                            this.closeModal();
                        }
                },
                    {
                        text: $.mage.__('Ok'),
                        class: 'modal-close',
                        click: function () {
                            console.log("ok");
                            orderIdsend = {
                                order: $element.attr('id'),
                                content: $('#contact-form2').serialize(true)
                            };
                            test1 = 1;
                            test1 = 2;
                            debugger;
                            ajaxT.ajaxPostSend(orderIdsend);
                            this.closeModal();
                        }
                }
                ]
            };
            $target = $(config.target);
            $target.modal(options);
            $element = $(element);

            var orderIdsend = {
                order: BigInt($element.attr('id')),
                content: ''
            };
            var test1;

            $element.click(function () {
                $target.modal('openModal');
            });
        }
    };
    return {
        'order-modal': OrderModal.initModal
    };
});

