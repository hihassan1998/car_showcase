"use client";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";


const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
    const router = useRouter();

    const handlenavigation = () => {
      const newLimit = (pageNumber + 1) * 10;
      const newPathName = updateSearchParams("limit",`${newLimit}` );
      router.push(newPathName, {scroll: false})

    }

  return (
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
            <CustomButton 
            title= "Visa Mer"
            btnType = "button"
            containerStyles= "bg-primary-green rounded-full text-white"
            handleClick={handlenavigation}
            />
        )}
        

    </div>
  )
}

export default ShowMore