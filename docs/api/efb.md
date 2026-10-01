# EFB 航行情报

> 接口分组：`efb-controller`

## 接口列表

- **机型查询**：`GET` `/api/efb/aircraft/{icao}`
- **获取飞机图片**：`POST` `/api/efb/aircraftImage`
- **机场搜索**：`GET` `/api/efb/airports/search/{text}`
- **机场信息查询**：`GET` `/api/efb/airports/{gpsCode}`
- **情报通播查询**：`GET` `/api/efb/atis`
- **航图查询**：`GET` `/api/efb/charts/{icao}`
- **区域边界查询**：`GET` `/api/efb/firBoundary/{icao}`
- **频率查询**：`GET` `/api/efb/frequency/{icao}`
- **停机位查询**：`GET` `/api/efb/gates/{icao}`
- **航路周期列表**：`GET` `/api/efb/getRouteCycle`
- **航路反向解析**：`POST` `/api/efb/parseRoute`
- **航路查询**：`POST` `/api/efb/route`
- **获取指定导航周期的全部航路**：`GET` `/api/efb/routes/{cycle}`
- **跑道查询**：`GET` `/api/efb/runway/{icao}`
- **进近边界查询**：`GET` `/api/efb/traconBoundary/{icao}`
- **气象查询**：`GET` `/api/efb/weather/metar/{icao}`
- **历史气象查询**：`POST` `/api/efb/weather/metarHistory/{icao}`
- **预报气象查询**：`GET` `/api/efb/weather/taf/{icao}`
- **历史预报气象查询**：`POST` `/api/efb/weather/tafHistory/{icao}`

## 机型查询

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/efb/aircraft/{icao}` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| icao | icao | path | true | string |  |

## 获取飞机图片

| 请求方式 | 接口地址 |
| --- | --- |
| POST | `/api/efb/aircraftImage` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| aircraft | aircraft | query | false | string |  |
| airline | airline | query | false | string |  |

**响应示例**

```json
{
	"code": 0,
	"data": [
		{
			"aircraft": "",
			"airline": "",
			"createdTime": "",
			"id": "",
			"imageUrl": "",
			"status": 0,
			"uploadedCid": ""
		}
	],
	"message": ""
}
```

## 机场搜索

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/efb/airports/search/{text}` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| text | text | path | true | string |  |

## 机场信息查询

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/efb/airports/{gpsCode}` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| gpsCode | gpsCode | path | true | string |  |

## 情报通播查询

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/efb/atis` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| apptype | apptype | query | false | string |  |
| arr | arr | query | false | string |  |
| dep | dep | query | false | string |  |
| es | es | query | false | integer(int32) |  |
| icao | icao | query | false | string |  |
| info | info | query | false | string |  |

## 航图查询

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/efb/charts/{icao}` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| icao | icao | path | true | string |  |

## 区域边界查询

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/efb/firBoundary/{icao}` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| icao | icao | path | true | string |  |

## 频率查询

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/efb/frequency/{icao}` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| icao | icao | path | true | string |  |

## 停机位查询

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/efb/gates/{icao}` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| icao | icao | path | true | string |  |

## 航路周期列表

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/efb/getRouteCycle` |

**请求参数**：暂无

**响应示例**

```json
{
	"code": 0,
	"data": [],
	"message": ""
}
```

## 航路反向解析

| 请求方式 | 接口地址 |
| --- | --- |
| POST | `/api/efb/parseRoute` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| cycle | cycle | query | false | string |  |
| route | route | query | false | string |  |

**响应示例**

```json
{
	"code": 0,
	"data": {
		"cycle": "",
		"route": "",
		"warnings": [],
		"waypoints": [
			{
				"lat": 0,
				"lon": 0,
				"name": ""
			}
		]
	},
	"message": ""
}
```

## 航路查询

| 请求方式 | 接口地址 |
| --- | --- |
| POST | `/api/efb/route` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| arr | arr | query | false | string |  |
| cycle | cycle | query | false | string |  |
| dep | dep | query | false | string |  |

**响应示例**

```json
{
	"code": 0,
	"data": {},
	"message": ""
}
```

## 获取指定导航周期的全部航路

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/efb/routes/{cycle}` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| cycle | cycle | path | true | string |  |

**响应示例**

```json
{
	"code": 0,
	"data": [
		{
			"data": [
				{
					"lat": 0,
					"lon": 0,
					"name": ""
				}
			],
			"name": "",
			"type": ""
		}
	],
	"message": ""
}
```

## 跑道查询

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/efb/runway/{icao}` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| icao | icao | path | true | string |  |

## 进近边界查询

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/efb/traconBoundary/{icao}` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| icao | icao | path | true | string |  |

## 气象查询

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/efb/weather/metar/{icao}` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| icao | icao | path | true | string |  |

## 历史气象查询

| 请求方式 | 接口地址 |
| --- | --- |
| POST | `/api/efb/weather/metarHistory/{icao}` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| icao | icao | path | true | string |  |
| pageNum | pageNum | query | false | integer(int64) |  |
| pageSize | pageSize | query | false | integer(int64) |  |

## 预报气象查询

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/efb/weather/taf/{icao}` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| icao | icao | path | true | string |  |

## 历史预报气象查询

| 请求方式 | 接口地址 |
| --- | --- |
| POST | `/api/efb/weather/tafHistory/{icao}` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| icao | icao | path | true | string |  |
| pageNum | pageNum | query | false | integer(int64) |  |
| pageSize | pageSize | query | false | integer(int64) |  |

