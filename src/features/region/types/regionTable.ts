export type DataEntry = {
	_id: {
		$oid: string
	}
	날짜: string
	지역: string
	시간: string
	"발전량(kW)": number
	"누적발전량(kWh)": number
	"일사량(W/㎡)": number
	"기온(℃)": number
	"풍속(㎧)": number
}
