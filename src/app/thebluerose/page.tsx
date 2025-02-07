import { Box } from "@mui/material";
import Spotlight from "../components/Spotlight";
import TextFadeInOut from "../components/TextFade";

export default function Home() {
    const string = ". . .a person needs new experiences. They jar something deep inside, allowing him to grow. Without change something sleeps inside us, and seldom awakens. The sleeper must awaken.";

    const lostHighwayQuote = "We've met before, haven't we?";
    const wildAtHeartQuote = "This whole world's wild at heart and weird on top.";
    return (
        <Box className="max-w-4xl flex justify-center content-center flex-col flex-wrap md:my-[100px] md:mx-auto md:px-[20px]">
            {/* <Spotlight /> */}
            <TextFadeInOut text={lostHighwayQuote} delay={150} />
            {/* <Box className="animate-pulse">
                <p>{string}</p>
            </Box> */}
        </Box>
    )
};
