import { Box, Typography } from "@mui/material";
import "./profile.css";
import Feed from "./feeds";

export default function Profile() {
    return (
        <Box className="profile">
            <Box style={{ flex: 1 }} className="profileRightTop">
                <Box className="profileCover">
                    <img
                        className="profileCoverImg"
                        src="https://media.licdn.com/dms/image/C5616AQGqC3RfF3XMKA/profile-displaybackgroundimage-shrink_350_1400/0/1631705977488?e=1725494400&v=beta&t=UjGWm4kyUDTiK0NoLUvX5gmzawhc36YTUNhm9R6Bn6k"
                        alt="COBHER FOTO"
                    />
                    <img
                        className="profileUserImg"
                        src="https://media.licdn.com/dms/image/D5603AQF_ndsR5LuRzA/profile-displayphoto-shrink_400_400/0/1705345656235?e=1725494400&v=beta&t=2-QsjYcuRaAiCa7DBlLbz5qG7r_Fm5zVrssP2EoeFdQ"
                        alt="PRAFIL FOTO"
                    />
                </Box>
                <Box className="profileInfo">
                    <Typography className="profileInfoName">Pratik</Typography>
                    <span className="profileInfoDesc">Gaand Faad Developer</span>
                </Box>
            </Box>
            <Box className="profileRightBottom">
                <Feed />
            </Box>
        </Box>
    );
}