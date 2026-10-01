# XVoice 语音

> 接口分组：`xvoice-controller`

## 接口列表

- **查询Xvoice在线频道**：`GET` `/api/xvoice/rooms`
- **查询Xvoice在线用户**：`GET` `/api/xvoice/users`

## 查询Xvoice在线频道

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/xvoice/rooms` |

**请求参数**：暂无

**响应示例**

```json
{
	"code": 0,
	"data": [
		{
			"currentMember": 0,
			"expiredUtcTimestamp": 0,
			"isPrivate": 0,
			"leader": "",
			"maxMember": 0,
			"radioFx": 0,
			"roomId": "",
			"roomName": ""
		}
	],
	"message": ""
}
```

## 查询Xvoice在线用户

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/xvoice/users` |

**请求参数**：暂无

**响应示例**

```json
{
	"code": 0,
	"data": [
		{
			"cid": "",
			"frequency1ControlArea": "",
			"frequency1Id": "",
			"frequency1Seat": "",
			"frequency2ControlArea": "",
			"frequency2Id": "",
			"frequency2Seat": "",
			"onATC": 0,
			"onFlight": 0,
			"onListening": 0,
			"onOther": 0,
			"otherRoomId": "",
			"otherRoomMemberType": 0,
			"status": 0
		}
	],
	"message": ""
}
```

