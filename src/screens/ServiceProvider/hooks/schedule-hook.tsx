import { Routes } from "@navigation/routes.helper";
import { HTTPMethod } from "@utils/enums/http-method.enum";
import { useHttp } from "@utils/hooks/http-hook";

export function useSchedule() {
  const { fetchData } = useHttp();

  async function getScheduleList(data: any): Promise<any> {
    const response = await fetchData({
      method: HTTPMethod.POST,
      url: Routes.GET_SCHEDULE_LIST,
      data,
    });

    return response.data;
  }

  return { getScheduleList };
}
