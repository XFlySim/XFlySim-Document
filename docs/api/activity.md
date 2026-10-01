# 活动管理

> 接口分组：`activity-controller`

## 接口列表

- **管制员活动报名名单**：`GET` `/api/activity/controllerActivityDataList`
- **活动清单**：`POST` `/api/activity/list`
- **飞行员活动报名名单**：`GET` `/api/activity/pilotActivityDataList`

## 管制员活动报名名单

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/activity/controllerActivityDataList` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| aid | aid | query | false | integer(int32) |  |

**响应示例**

```json
{
	"code": 0,
	"data": [
		{
			"callsign": "",
			"cid": "",
			"controllerRank": "",
			"controllerRoom": "",
			"controllerTime": "",
			"name": "",
			"routeId": 0
		}
	],
	"message": ""
}
```


## 活动清单

| 请求方式 | 接口地址 |
| --- | --- |
| POST | `/api/activity/list` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| pageNum | pageNum | query | false | integer(int64) |  |
| pageSize | pageSize | query | false | integer(int64) |  |

**响应示例**

```json
{
	"code": 0,
	"data": {
		"current": 0,
		"pages": 0,
		"records": [
			{
				"aid": 0,
				"airportLevel": "",
				"airportLevelId": 0,
				"cid": "",
				"credit": "",
				"cycle": "",
				"imageUrl": "",
				"money": "",
				"name": "",
				"remark": "",
				"routeData": [
					{
						"airportLevelId": 0,
						"arr": "",
						"dep": "",
						"direction": "",
						"distance": 0,
						"id": 0,
						"route": ""
					}
				],
				"routeFileUrl": "",
				"rule": "",
				"time": ""
			}
		],
		"size": 0,
		"total": 0
	},
	"message": ""
}
```


## 飞行员活动报名名单

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/activity/pilotActivityDataList` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| aid | aid | query | false | integer(int32) |  |

**响应示例**

```json
{
	"code": 20000,
	"data": [
		{
			"aircraft": "",
			"airline": "",
			"arrSpot": "",
			"callsign": "",
			"cid": "",
			"credit": 0,
			"name": "",
			"pilotRank": "",
			"pilotTime": "",
			"routeId": 0,
			"service": "",
			"spot": "",
			"status": ""
		}
	],
	"message": ""
}
```

