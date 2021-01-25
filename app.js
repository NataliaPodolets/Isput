(function () {
    'use strict';

    angular.module('Isput', [])
        .controller('Controller', Controller)
        .factory('ItemsFactory', ItemsFactory);

    Controller.$inject = ['ItemsFactory'];

    function Controller(ItemsFactory) {
        var controller = this;

        var buyItm = ItemsFactory();
        
        controller.hideItem = function (itemIndex) {
            buyItm.hideItem(itemIndex)
        }

        controller.ItemsList = buyItm.getBuyItems();
        controller.removeItem = function (itemIndex) {
            buyItm.removeItem(itemIndex);
        }
        
    };

    function ItemsFactory(){
        var factory = function(){
            return new Service();

        }
        return factory;
    }

    function Service() {
        var service = this;
        var ItemsList = [
            {
                mark: "Lego",
                quantity: 20,
                isVisible : true
            },
            {
                mark: "Barbie",
                quantity: 45,
                isVisible : true
            },
                        {
                mark: "Lol",
                quantity: 100,
                isVisible : true
            },
            {
                mark: "Baby born",
                quantity: 15,
                isVisible : true
            },
            {
                mark: "Hot wheels",
                quantity: 8,
                isVisible : true
            },
            {
                mark: "Little pony",
                quantity: 68,
                isVisible : true
            },
        ];

        service.getBuyItems = function () {
            return ItemsList;
        };
        service.hideItem = function (itemId) {
            ItemsList[itemId].hide = true;
        }
        service.removeItem = function (itemId) {
            ItemsList.splice(itemId, 1);
        };
    };
    
})();
