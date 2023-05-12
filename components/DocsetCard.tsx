import  Link from "next/link";
import { Pill, Surface, Text, Tooltip, View, interactive, rcss, tokens } from "rui";
import { docsetItemType } from "utils/getDocs";
import * as icons from '../icons';

const DocsetCard: React.FC<docsetItemType> = ({
    name,
    version,
    downloaded,
}) => (
    <Surface
        elevated
        css={[
            rcss.p(16),
            rcss.m(8),
            rcss.borderRadius(8),
            interactive.filledAndOutlined,
            rcss.maxWidth(210),
            rcss.maxHeight(104),
        ]}
    >
        <Link href={`/docs/${name}`} css={[{ color: tokens.foregroundDefault }]}>
            <View css={[rcss.rowWithGap(16), rcss.center]}>
                {downloaded ? (
                    <icons.BookClosed width={50} height={50} />
                ) : (
                    <icons.Download width={50} height={50} />
                )}

                <View css={[rcss.colWithGap(4), rcss.center]}>
                    <Tooltip tooltip={name.replace(/_/g, " ")}>
                        <Text
                            variant="subheadBig"
                            css={[
                                {
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    maxWidth: "100px",
                                },
                            ]}
                        >
                            {name.replace(/_/g, " ")}
                        </Text>
                    </Tooltip>
                    <Text variant="small" color="dimmer">
                        v{version}
                    </Text>
                    <Tooltip
                        tooltip={
                            downloaded
                                ? "This docset is downloaded"
                                : "This docset needs downloading and could take a while to load"
                        }
                    >
                        <Pill
                            css={[rcss.width(110)]}
                            text={downloaded ? "Downloaded" : "Not Downloaded"}
                            colorway={downloaded ? "positive" : "negative"}
                        />
                    </Tooltip>
                </View>
            </View>
        </Link>
    </Surface>
);
export default DocsetCard;