'use strict';

var React = require('react');
var Reflux = require('reflux');
var UserNotification = require('./UserNotification.jsx');

var UserNotifications = React.createClass({

    _renderNotification(notification) {
        return <UserNotification
            key={notification.id}
            notification={notification} />;
    },

    _renderNotifications() {
        var notifications = this.props.notifications;
        var length = notifications.length;

        return notifications.map((notification, index) => {
            var notificationComponent = this._renderNotification(notification);
            return index === length - 1 ?
                notificationComponent :
                [notificationComponent, <li className="divider"></li>];
        });
    },

    render() {
        var notifications = this.props.notifications;
        if (notifications && notifications.length > 0) {
            return (
                <ul className="dropdown-menu UserNotifications">
                    { this._renderNotifications() }
                </ul>
            );
        }
        return null;
    }

});

module.exports = UserNotifications;
