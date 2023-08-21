import PropTypes from 'prop-types';
// @mui
import {
    Box,
    Radio,
    Stack,
    Button,
    Drawer,
    Divider,
    Checkbox,
    FormGroup,
    Typography,
    RadioGroup,
    FormControlLabel,
} from '@mui/material';
// ----------------------------------------------------------------------

export const SORT_BY_OPTIONS = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'priceDesc', label: 'Price: High-Low' },
    { value: 'priceAsc', label: 'Price: Low-High' },
];
export const FILTER_GENDER_OPTIONS = ['All', 'Men', 'Women'];
export const FILTER_AGE_OPTIONS = ['All', '10 - 20', '20 - 25', '25 - 30', '30 - 40', '40 - 50', '50 - 60'];
export const FILTER_RATING_OPTIONS = ['up4Like ❤', 'up3Like ❤', 'up4View 👁‍🗨', 'up3View 👁‍🗨'];
// ----------------------------------------------------------------------

TourFilterSidebar.propTypes = {
    openFilter: PropTypes.bool,
    onOpenFilter: PropTypes.func,
    onCloseFilter: PropTypes.func,
};

export default function TourFilterSidebar({ openFilter, onOpenFilter, onCloseFilter }) {
    return (
        <>
            <Button disableRipple color="inherit" onClick={onOpenFilter}>
                Filters&nbsp;
            </Button>

            <Drawer
                anchor="right"
                open={openFilter}
                onClose={onCloseFilter}
                PaperProps={{
                    sx: { width: 280, border: 'none', overflow: 'hidden' },
                }}
            >
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
                    <Typography variant="subtitle1" sx={{ ml: 1 }}>
                        Filters
                    </Typography>
                </Stack>
                <Divider />
                <Stack spacing={3} sx={{ p: 3 }}>
                    <div>
                        <Typography variant="subtitle1" gutterBottom>
                            Gender
                        </Typography>
                        <FormGroup>
                            {FILTER_GENDER_OPTIONS.map((item) => (
                                <FormControlLabel key={item} control={<Checkbox />} label={item} />
                            ))}
                        </FormGroup>
                    </div>

                    <div>
                        <Typography variant="subtitle1" gutterBottom>
                            Age
                        </Typography>
                        <RadioGroup>
                            {FILTER_AGE_OPTIONS.map((item) => (
                                <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                            ))}
                        </RadioGroup>
                    </div>
                    <div>
                        <Typography variant="subtitle1" gutterBottom>
                            Rating
                        </Typography>
                        <RadioGroup>
                            {FILTER_RATING_OPTIONS.map((item, index) => (
                                <FormControlLabel
                                    key={item}
                                    value={item}
                                    control={
                                        <Radio
                                            disableRipple
                                            color="default"
                                            sx={{
                                                '&:hover': { bgcolor: 'transparent' },
                                            }}
                                        />
                                    }
                                    label={item}
                                    sx={{
                                        my: 0.5,
                                        borderRadius: 1,
                                        '&:hover': { opacity: 0.48 },
                                    }}
                                />
                            ))}
                        </RadioGroup>
                    </div>
                </Stack>

                <Box sx={{ p: 3 }}>
                    <Button fullWidth size="large" type="submit" color="inherit" variant="outlined">
                        Clear All
                    </Button>
                </Box>
            </Drawer>
        </>
    );
}
export { default as TourFilterSidebar } from './TourFilterSidebar';
