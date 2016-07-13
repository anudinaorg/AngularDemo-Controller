angular.module("productApp",[])

.controller("samsungCtrl",['$scope','products',function($scope,products){
	$scope.samsungProducts =  products.queryProducts();
}])
.controller("appleCtrl",['$scope','products',function($scope,products){
	$scope.appleProducts =  products.queryProducts();	
}])
//Custom factory should always returns an object back all time
.factory('products', function(){
	return {
		queryProducts:function(){
			var productArray = [
			  {id:1001,name:'ipadmini',brand:'apple',price:'$799'},
			  {id:1001,name:'iphone6',brand:'apple',price:'$699'},
			  {id:1001,name:'galaxys3',brand:'samsung',price:'$700'},
			  {id:1001,name:'s6',brand:'samsung',price:'$599'}
			  ];
			return productArray;
		}
	};
});