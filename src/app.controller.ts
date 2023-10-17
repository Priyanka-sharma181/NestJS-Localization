import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { I18n, I18nContext } from 'nestjs-i18n';

@Controller()
export class AppController {
  @Get()
  getHello(@I18n() i18n: I18nContext) {
    console.log(i18n)
    return i18n.t(`test.click`);
  }
}