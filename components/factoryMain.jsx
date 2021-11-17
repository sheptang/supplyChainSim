import React, { useState } from 'react'

const FactoryMain = () => {

	const [productionLine, setProductionLine] = useState ({
		productionLineItem: {
			item1: 0,
			item2: 0,
			item3: 0,
			item4: 0,
			item5: 0,
			item6: 0,
			item7: 0,
			item8: 0,
			item9: 0
		},
	});

	function productionLineClick(event, lineNo){
		const elm = event.target
		const toAddItem = "item" + lineNo;
		setProductionLine(state => ({
			...state,
			productionLineItem: {
				...productionLine.productionLineItem,
				[toAddItem]: 5
			}
		}));
	}

	function gameTick(itemLine){
		let nextItemPoint = null;
		if(itemLine <= 9){
			nextItemPoint = itemLine+1
		}
		const toAddItem = "item" + itemLine;
		setProductionLine(state => ({
			...state,
			productionLineItem: {
				...productionLine.productionLineItem,
				[toAddItem]: nextItemPoint
			}
		}))
	}

	return(
		<div id="factoryWrapperGrid">
			<div className="productionHeader">Factory</div>
			<div className="productionWeek1">Week 1</div>
			<div className="productionWeek2">Week 2</div>
			<div className="productionWeek3">Week 3</div>
			<div className="productionLine1" onClick={(event) => {productionLineClick(event, 1)}}>Production Line 1</div>
			<div className="productionLine2" onClick={(event) => {productionLineClick(event, 4)}}>Production Line 2</div>
			<div className="productionLine3" onClick={(event) => {productionLineClick(event, 7)}}>Production Line 3</div>
			<div className="productionLineItem1">{productionLine.productionLineItem.item1}</div>
			<div className="productionLineItem2">{productionLine.productionLineItem.item2}</div>
			<div className="productionLineItem3">{productionLine.productionLineItem.item3}</div>
			<div className="productionLineItem4">{productionLine.productionLineItem.item4}</div>
			<div className="productionLineItem5">{productionLine.productionLineItem.item5}</div>
			<div className="productionLineItem6">{productionLine.productionLineItem.item6}</div>
			<div className="productionLineItem7">{productionLine.productionLineItem.item7}</div>
			<div className="productionLineItem8">{productionLine.productionLineItem.item8}</div>
			<div className="productionLineItem9">{productionLine.productionLineItem.item9}</div>
			<div className="productionWarehouse">Factory Warehouse</div>
		</div>
	);
}

export default FactoryMain;