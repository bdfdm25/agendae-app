import { useState } from "react";
import { ServiceListView } from "./ServiceListView";
import { SERVICELIST } from "../../mocks/serviceList";

export default function ServiceListContainer() {
  const [serviceList, setServiceList] = useState(SERVICELIST);

  return <ServiceListView serviceList={serviceList} />;
}
