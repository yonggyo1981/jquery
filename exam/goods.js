/**
* 상품 양식 추가,삭제
*
*/
const goodsForm = {
	/**
	* 상품 추가 
	*
	*/
	add : function() {
		
	},
	/**
	* 상품 삭제
	*
	*/
	delete : function(el) {
		el.closest(".goods").remove();
	},
};


$(function() {
	/** 상품 추가 */
	$("#add").click(function() {
		
		
	});
	
	/** 상품 삭제 */
	$(".del").click(function() {
		goodsForm.delete($(this));
	});
	
	$("button").click(function(event) {
		// 버튼 클릭시 양식이 제출되는 기본동작 -> 제거 
		event.preventDefault();
	});
});