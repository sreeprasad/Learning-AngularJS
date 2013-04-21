function ListController ($scope) {
	 
	 $scope.name="Sreeprasad's list";
	 $scope.items=[
	 		{text:'Hello', deleted: false,archived:false},
	 		{text:'My name is Sreeprasad.', deleted: false,archived:false},
	 		{text:'I am learning Angular JS through backlift', deleted: false,archived:false}
	 ];

	 $scope.addingNewItems = function(){

	 	$scope.items.push(
	 			{
	 				text:$scope.itemText,
	 				deleted:false,
	 				archived:false
	 			}
	 		);
	 	$scope.itemText=''
	 }

	 $scope.deleteItemFromList = function(item){
	 	item.deleted = true;
	 }


	 $scope.archivingDeletedItems = function (item){
	 	 
	 	 for(var i=0;i<$scope.items.length;i++){

	 	 		if($scope.items[i].deleted==true){
	 	 			if($scope.items[i].archived=true);
	 	 		}

	 	 }
	 }

	 $scope.deleteAllItems = function(){
	 	for(var i=0;i<$scope.items.length;i++){
	 	 		$scope.items[i].deleted=true;
	 	 		$scope.items[i].archived=false;
	 	 	}
	}

	 $scope.unarchiveItem= function(item){
	 	item.archived=false;
	 	item.deleted=false;
	 }	

	 $scope.unArchiveAllDeletedItems = function(){
	 	 	for(var i=0;i<$scope.items.length;i++){
				$scope.items[i].archived=false;
				$scope.items[i].deleted=false;
			}		
	 }

}