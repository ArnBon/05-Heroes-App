import { CustomJumbotrom } from "@/components/custom/CustomJumbotrom";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

export const SearchPage = () => {
  return (
    <>
    <CustomJumbotrom
    title= "Búsqueda de SuperHéroes"
    description="Descubre, explora y administra super héroes y villanos">
    </CustomJumbotrom>

     {/* Stats Dashboard */}
           <HeroStats></HeroStats>

      {/* Controls */}
      {/* Advanced Filters */}
      <SearchControls></SearchControls>


    </>
  );
};

export default SearchPage;
