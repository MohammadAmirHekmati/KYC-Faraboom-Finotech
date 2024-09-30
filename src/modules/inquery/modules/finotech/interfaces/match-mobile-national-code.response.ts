export class MatchMobileNationaCodeResponse {
    result:MatchMobileNationalCodeResult
    status: string
    trackId: string
    error ?: any
}

export class MatchMobileNationalCodeResult {
    isValid: boolean
}