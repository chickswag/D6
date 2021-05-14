SELECT i.id,i.code, i.description,i.charge,c.name,c.center, avg(i.charge) as "average"
FROM bill b join cost c on b.cost_id = c.id join item i on i.id = b.item_id
WHERE c.id = 2 group by i.id;

CREATE TABLE `patient`
(
    `id`              int         NOT NULL AUTO_INCREMENT,
    `name`            varchar(45) NOT NULL,
    `address`         varchar(100)         DEFAULT NULL,
    `city`            varchar(100)         DEFAULT NULL,
    `date_created`    datetime    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `date_admitted`   datetime             DEFAULT NULL,
    `date_discharged` datetime             DEFAULT NULL,
    PRIMARY KEY (`id`)
)

CREATE TABLE `bill`
(
    `id`           int NOT NULL AUTO_INCREMENT,
    `cost_id`      int      DEFAULT NULL,
    `item_id`      int      DEFAULT NULL,
    `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
    `balance_due`  float    DEFAULT NULL,
    PRIMARY KEY (`id`)
    FOREIGN KEY (`item_id`) REFERENCES item
    FOREIGN KEY (`cost_id`) REFERENCES cost
)

CREATE TABLE `cost`
(
    `id`     int          NOT NULL AUTO_INCREMENT,
    `center` varchar(45)  NOT NULL,
    `name`   varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
)

CREATE TABLE `item`
(
    `id`          int NOT NULL AUTO_INCREMENT,
    `code`        varchar(45)  DEFAULT NULL,
    `description` varchar(250) DEFAULT NULL,
    `charge`      float        DEFAULT NULL,
    PRIMARY KEY (`id`)
)
