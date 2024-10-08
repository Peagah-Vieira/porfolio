import React from "react";
import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

export default function CommitsSection() {
    return (
        <section>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                    Days I <strong className="main-color">Code</strong>
                </h1>
                <GitHubCalendar
                    username="Peagah-Vieira"
                    blockSize={15}
                    blockMargin={5}
                    color="#c084f5"
                    fontSize={16}
                />
            </Row>
        </section>
    )
}
