import { IServiceProvider } from "@models/service-provider.interface";
import { Routes } from "@navigation/routes.helper";
import { HTTPMethod } from "@utils/enums/http-method.enum";
import { useHttp } from "@utils/hooks/http-hook";

export function useOnboarding() {
  const { fetchData } = useHttp();

  async function setServiceProvider(data: IServiceProvider): Promise<void> {
    await fetchData({
      method: HTTPMethod.POST,
      url: Routes.SAVE_SERVICE_PROVIDER,
      data,
    });
  }

  return { setServiceProvider };
}
