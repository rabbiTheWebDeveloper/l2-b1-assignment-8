import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { UserSerice } from './user.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await UserSerice.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Create Successfully',
    data: result,
  });
});

export const UserControler = {
  insertIntoDB,
};
