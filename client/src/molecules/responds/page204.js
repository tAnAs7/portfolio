import React, { useRef, useState, useEffect } from "react";
import { CircularProgress, Fade, Paper, Typography, makeStyles, Link } from "@material-ui/core";

import robot from "../../images/robot.png"

const useStyles = makeStyles((theme) => ({
    flexWithSpace: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    thick: {
        margin: ".5rem"
    }
}))

const Content = () => {
    const [query, setQuery] = useState('idle');
    const timerRef = useRef();
    const classes = useStyles();

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        if (query !== 'idle') {
            setQuery('idle');
            return;
        }

        setQuery('loading');

        timerRef.current = window.setTimeout(() => {
            setQuery('error');
        }, 5000);

        clearTimeout(timerRef.current);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
        <Paper elevation={3} className='vertical-spacing-1'>
            {query === 'error' ? (
                <div className={classes.flexWithSpace}>
                    <img src={robot} alt="robot" className='thick-1' />
                    <div className='flex-center thick-2'>
                        <Typography component='h2' variant="h5" className={classes.thick}>Lỗi trang: không tìm thấy dữ liệu </Typography>
                        <Typography variant='body1' className={classes.thick}>Có thể đã gặp sự cố trong việc lấy dữ liệu hoặc nội dung trang đang trong giai đoạn phát triển</Typography>
                        <Typography variant='body1' className={classes.thick}>Gặp lại bạn sau nhé!</Typography>
                        <Link href="/" underline="always" className={classes.thick}>Về trang chủ</Link>
                    </div>
                </div>
            ) : (
                <div className='flex-center'>
                    <Fade in={query === 'loading'} style={{ transitionDelay: query === 'loading' ? '1000ms' : '0ms' }} unmountOnExit>
                        <div className='flex-center thick-3'>
                            <CircularProgress className='thick-1' />
                            <Typography variant='body1'>Đang lấy dữ liệu...</Typography>
                        </div>
                    </Fade>
                </div>
            )}
        </Paper>
        </>
    );
};

export default Content;