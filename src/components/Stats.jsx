import { LuGitPullRequestDraft } from "react-icons/lu";
import useUserData from "../hooks/useUserData";
import { FaDonate, FaUsers } from "react-icons/fa";
import useStats from "../hooks/useStats";

const Stats = () => {
    const { userData } = useUserData();
    const { stats } = useStats();
    console.log(stats);
    console.log(stats?.requestsStats?.percentage);

    return (
        <div>
            {userData?.role === "admin" && (
                <div>
                    <div className="stats shadow rounded bg-bkg text-txt stats-vertical lg:stats-horizontal ">
                        <div className="stat">
                            <div className="stat-figure text-accent">
                                <FaUsers className="w-8 h-8" />
                            </div>
                            <div className="stat-title text-txt">
                                Total User
                            </div>
                            <div className="stat-value text-txt">
                                {stats?.usersStats?.count}
                            </div>
                            {stats?.usersStats?.percentage > 0 ? (
                                <div className="stat-desc text-txt">
                                    {stats?.usersStats?.percentage?.toFixed(2)}%
                                    increase
                                </div>
                            ) : (
                                <>
                                    {stats?.usersStats?.percentage < 0 && (
                                        <div className="stat-desc text-txt">
                                            {stats?.usersStats?.percentage?.toFixed(
                                                2
                                            )}
                                            % decrease
                                        </div>
                                    )}

                                    {stats?.usersStats?.percentage === null && (
                                        <div className="stat-desc text-txt">
                                            Data stable
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-accent">
                                <FaDonate className="w-8 h-8"></FaDonate>
                            </div>
                            <div className="stat-title text-txt">
                                Total Donation
                            </div>
                            <div className="stat-value text-txt">2.6M</div>
                            <div className="stat-desc text-txt">
                                21% more than last month
                            </div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-accent">
                                <LuGitPullRequestDraft className="w-8 h-8" />
                            </div>
                            <div className="stat-title text-txt">
                                Total Request
                            </div>
                            <div className="stat-value text-txt">
                                {stats?.requestsStats?.count}
                            </div>
                            {stats?.requestsStats?.percentage > 0 ? (
                                <div className="stat-desc text-txt">
                                    {stats?.requestsStats?.percentage?.toFixed(
                                        2
                                    )}
                                    % increase
                                </div>
                            ) : (
                                <>
                                    {stats?.requestsStats?.percentage < 0 && (
                                        <div className="stat-desc text-txt">
                                            {stats?.requestsStats?.percentage?.toFixed(
                                                2
                                            )}
                                            % decrease
                                        </div>
                                    )}

                                    {stats?.requestsStats?.percentage ===
                                        null && (
                                        <div className="stat-desc text-txt">
                                            Data stable
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Stats;
