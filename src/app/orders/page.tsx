import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useGetCategoriesQuery } from "@/stores/apiSlice";
import "../../styles/components/Orders.scss";

export default function Orders() {
  const { data, error, isLoading } = useGetCategoriesQuery("");
  let categoriesLists = data;
  return (
    <div id="Filter">
      <Grid className="main-grid" container>
        <Grid className="filter-grid">
          <IconButton className="btnIcon" aria-label="search">
            <i className="pos-search h-6 w-6 icon-filter" aria-hidden="true" />
          </IconButton>
        </Grid>
        <Grid className="filter-grid">
          <IconButton className="btnIcon" aria-label="filter">
            <i className="pos-filter h-6 w-6 icon-filter" aria-hidden="true" />
          </IconButton>
        </Grid>
        <Grid className="filter-grid">
          <div id="Category">
            <Grid className="main-grid" container>
              <Grid className="category-grid">
                {categoriesLists.map((cat: any) => (
                  <Button className="btnCategory" key={cat.id}>
                    {cat.name}
                  </Button>
                ))}
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
