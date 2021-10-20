import { useEffect, useState } from "react";
import usePackages from "./usePackages";

const useSinglePackage = () => {
  const [packages] = usePackages();

  const [singlePackage, setSinglePackage] = useState([]);

  useEffect(() => {
    fetch('./packageDetails.json')
      .then(res => res.json())
      .then(data => setSinglePackage(data))
  }, [packages]);

  return [singlePackage];

}
export default useSinglePackage;