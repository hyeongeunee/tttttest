import { useState } from 'react';
// @mui
import { Container, Stack } from '@mui/material';
// components
import ProductSort from './product/ProductSort';
import ProductList from './product/ProductList';
import TourFilterSidebar from './product/TourFilterSidebar';
// mock
import PRODUCTS from './tourist.js';

// ----------------------------------------------------------------------

export default function ProductsPage() {
    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    return (
        <>
            <Container>
                <Stack
                    direction="row"
                    flexWrap="wrap-reverse"
                    alignItems="center"
                    justifyContent="flex-end"
                    sx={{ mb: 5 }}
                >
                    <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                        <TourFilterSidebar
                            openFilter={openFilter}
                            onOpenFilter={handleOpenFilter}
                            onCloseFilter={handleCloseFilter}
                        />
                        <ProductSort />
                    </Stack>
                </Stack>
                <ProductList products={PRODUCTS} />
            </Container>
        </>
    );
}
