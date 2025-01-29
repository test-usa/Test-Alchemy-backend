import { QuestionPaperModel } from "../questionPaper/questionPaper.model";
import { UserModel } from "../user/user.model";

export const searchService = async (user: any, query: any) => {
  if (!query?.searchTerm) {
    return [];
  }
  let { searchTerm, limit, page } = query;

  if (!limit) {
    limit = 10;
  }
  if (!page) {
    page = 0;
  }

  if (user.role === "candidate" || user.role === "examinee") {
    const searchQuery = {
      isDeleted: false,
      domain: { $regex: searchTerm, $options: "i" },
    };
    const result = await QuestionPaperModel.find(searchQuery)
      .limit(limit)
      .skip(limit * page);

    return result;
  }

  if (user.role === "admin") {
    const searchQuery: any = {
      isDeleted: false,
      userType: "examinee",
    };
    if (searchTerm) {
      const splitedSearchTerm = searchTerm.split(" ");

      if (splitedSearchTerm.length > 1) {
        searchQuery.firstName = { $regex: splitedSearchTerm[0], $options: "i" };
        searchQuery.lastName = { $regex: splitedSearchTerm[1], $options: "i" };
      } else {
        searchQuery.firstName = { $regex: splitedSearchTerm[0], $options: "i" };
      }
    }
    const result = await UserModel.find(searchQuery)
      .limit(limit)
      .skip(limit * page);
    return result;
  }
};
export default searchService;
