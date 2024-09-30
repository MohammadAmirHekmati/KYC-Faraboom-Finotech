import { ApiProperty } from "@nestjs/swagger";

export class CreateMatchMobileNationalCodeDto {
    @ApiProperty()
    mobile: string

    @ApiProperty()
    nationalCode: string

    @ApiProperty()
    isValid?: boolean

    @ApiProperty()
    trackId: string

    @ApiProperty()
    status: string


}