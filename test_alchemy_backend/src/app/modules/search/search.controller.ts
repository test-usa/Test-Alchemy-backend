import catchAsync from "../../util/catchAsync";
import { searchService } from "./search.service";

export const searchController = catchAsync(async (req, res) => {
  const result = await searchService(req.user as any, req.query as any);
  res.status(200).json({
    message: "Data retrieved successfully",
    success: true,
    status: 200,
    body: result,
  });
});
